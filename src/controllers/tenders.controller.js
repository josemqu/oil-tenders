import { tendersService } from "../services/index.js";

export async function getTenders(req, res) {
  try {
    const tenders = await tendersService.getTenders();
    return res.status(200).json(tenders);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export async function getTenderByDate(req, res) {
  try {
    const tender = await tendersService.getTenderByDate(req.params.date);
    if (tender) {
      res.status(200).json(tender);
    } else {
      res.status(404).send("Tender not found 1");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getTender(req, res) {
  try {
    const tender = await tendersService.getTender(req.params.id);
    if (tender) {
      res.status(200).json(tender);
    } else {
      res.status(404).send("Tender not found 3");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function createTender(req, res) {
  try {
    const tender = await tendersService.createTender(req.body);
    res.status(201).send({
      ok: true,
      result: "Tender created successfully",
      payload: tender,
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      result: "Tender not created",
      message: error.message,
    });
  }
}

export async function updateTender(req, res) {
  try {
    const tender = await tendersService.updateTender(req.params.id, req.body);
    res.status(200).json({
      ok: true,
      result: "Tender updated successfully",
      payload: tender,
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      result: "Tender not updated",
      message: error.message,
    });
  }
}

export async function deleteTender(req, res) {
  try {
    const tender = await tendersService.deleteTender(req.params.id);
    res.status(200).json({
      ok: true,
      result: "Tender deleted successfully",
      payload: tender,
    });
  } catch (error) {
    res.status(500).send({
      ok: false,
      result: "Tender not deleted",
      message: error.message,
    });
  }
}
