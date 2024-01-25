// import { tendersRepository } from "../repositories/index.js";
import axios from "axios";

class TendersService {
  async getTenders() {
    const tenders = await axios.get(
      "https://www.se.gob.ar/comercio_exterior_liquidos/oferta_com_ext_expo_store.php",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    /**
     *  id: { type: String, required: true },
  date: { type: String, required: true },
  company: { type: String, required: true },
  product: { type: String, required: true },
  volume: { type: String, required: true },
  fromDate: { type: String, required: true },
  toDate: { type: String, required: true },
  price: { type: String, required: true },
  position: { type: String, required: true },
  deliveryPlant: { type: String, required: true },
  observations: { type: String, required: true },
  aditionalInfo: { type: String },
  pdf: { type: String, required: true },
  finished: { type: String, required: true },
     */

    const tendersArray = tenders.data.aaData.map((tender) => {
      return {
        id: tender[0],
        date: tender[1],
        company: tender[2],
        product: tender[3],
        volume: tender[4],
        fromDate: tender[5],
        toDate: tender[6],
        price: tender[7],
        position: tender[8],
        deliveryPlant: tender[9],
        observations: tender[10],
        aditionalInfo: tender[11],
        pdf: tender[12],
        finished: tender[13],
      };
    });
    console.log(tendersArray);

    return tendersArray;
  }

  async getTender(id) {
    const tender = await tendersRepository.getTender(id);
    return tender;
  }

  async getTenderByDate(date) {
    const tender = await tendersRepository.getTenderByDate(date);
    return tender;
  }

  async createTender(tender) {
    const createdTender = await tendersRepository.createTender(tender);
    return createdTender;
  }

  async updateTender(id, tender) {
    const updatedTender = await tendersRepository.updateTender(id, tender);
    return updatedTender;
  }

  async deleteTender(id) {
    const deletedTender = await tendersRepository.deleteTender(id);
    return deletedTender;
  }
}

export default TendersService;
