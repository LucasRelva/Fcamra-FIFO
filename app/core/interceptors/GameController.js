const Game = require("../models/Game");
const Unity = require("../models/Unity");
const Wait = require("../models/Wait");
const slugify = require("slugify");
const { Sequelize, Op } = require("sequelize");

module.exports = {
  async read(req, res) {
    const { game_id, unity_id } = req.params;
    try {
      const game = await Game.findOne({
        where: {
          id: game_id,
        },
        include: "unities",
      });
      let next,
        prev;
      if (game) {
        next = await Game.findAll({
          where: {
            id: {
              [Op.gt]: game_id,
            },
          },
          include: [
            {
              attributes: [],
              association: "unities",
              through: {
                attributes: ["game_id"],
              },
              where: {
                id: unity_id,
              },
            },
          ],
          limit: 1,
        })[0];
        if(!next || next.length ===0){
            next = await Game.findOne({
                include: [
                  {
                    attributes: [],
                    association: "unities",
                    through: {
                      attributes: ["game_id"],
                    },
                    where: {
                      id: unity_id,
                    },
                  },
                ]
            });
        }
        prev = await Game.findAll({
          where: {
            id: {
              [Op.lt]: game_id,
            },
          },
          include: [
            {
              attributes: [],
              association: "unities",
              through: {
                attributes: ["game_id"],
              },
              where: {
                id: unity_id,
              },
            },
          ],
          limit: 1,
          order: [[ 'id' , 'DESC']]
        })[0];
        if(!prev){
            prev = await Game.findOne({
                include: [
                  {
                    attributes: [],
                    association: "unities",
                    through: {
                      attributes: ["game_id"],
                    },
                    where: {
                      id: unity_id,
                    },
                  },
                ],
                order: [[ 'id' , 'DESC']],
            });
        }
      }
      return res.json({ infos: game, prev, next });
    } catch (error) {
      return res.json({ error });
    }
  },

  async list(req, res) {
    const { unity_id } = req.params;

    const games = await Game.findAll({
      attributes: ["name", "slug", "id"],
      include: [
        {
          association: "unities",
          through: {
            attributes: ["game_id"],
          },
          where: {
            id: unity_id,
          },
        },
      ],
    });

    for (let i = 0; i < games.length; i++) {
      games[i].total_waits = await games[i].countWaits();
    }

    return res.json(games);
  },

  async store(req, res) {
    const { unity_id } = req.params;
    const { name, is_active } = req.body;

    const unity = await Unity.findByPk(unity_id);

    if (!unity) return res.status(400).json({ error: "Unity not found" });

    const slug = slugify(name).toLowerCase();

    const [game, created] = await Game.findOrCreate({
      where: {
        name: name,
        slug: slug,
        is_active: is_active,
      },
    });

    if (!created) {
      game.update({ is_active: true });
    }

    await unity.addGame(game);

    return res.json(game);
  },

  async delete(req, res) {
    const { unity_id } = req.params;
    const { slug } = req.body;

    const unity = await Unity.findByPk(unity_id);

    if (!unity) return res.status(400).json({ error: "Unity not found" });

    const game = await Game.findOne({
      where: {
        slug,
      },
    });

    await unity.removeGame(game);

    return res.json(game);
  },
};
