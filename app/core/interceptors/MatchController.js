const Match = require("../models/Match");
const Wait = require("../models/Wait");

module.exports = {

  async list(req, res) {
    const { wait_id } = req.params;
    try {
        const matchs = await Match.findAll({
        include: [
            {
            association: "waits",
            through: {
                attributes: ["match_id"],
            },
            where: {
                id: wait_id,
                status: 1
            },
            },
        ],
        });
        return res.json(matchs);
    } catch (error) {
        return res.json({ error });
    }
  },

  async store(req, res) {
    const { wait_id } = req.params;
    const { completed } = req.body;

    const wait = await Wait.findByPk(wait_id);

    if (!wait) return res.status(400).json({ error: "Wait not found" });
    try {
        const match = await Match.create({
            completed,
        });
        if (match) {
            await wait.addMatch(match);
        }
        return res.json(match);   
    } catch (error) {
        return res.json({ error });
    }
  },

  async delete(req, res) {
    const { match_id } = req.params;
    const match = await Match.findByPk(match_id);
    await match.destroy();
    return res.json(match);
  },
};
