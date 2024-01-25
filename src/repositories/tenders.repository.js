/*
import { tendersModel } from "../models/tenders.model.js";

class TendersRepository {
  async getTenders() {
    const tenders = await tendersModel
      .find({})
      .sort({
        date: "desc",
      })
      .lean();
    return tenders;
  }

  async getTender(id) {
    const tender = await tendersModel.findById(id);
    return tender;
  }

  async getTenderByDate(date) {
    const tender = await tendersModel.findOne({ date: date });
    return tender;
  }

  async createTender(tender) {
    const createdTender = await tendersModel.create(tender);
    return createdTender;
  }

  async updateTender(id, tender) {
    const updatedTender = await tendersModel.findByIdAndUpdate(id, tender, {
      new: true,
    });
    return updatedTender;
  }

  async deleteTender(id) {
    const deletedTender = await tendersModel.findByIdAndDelete(id);
    return deletedTender;
  }
}

export default TendersRepository;
*/
