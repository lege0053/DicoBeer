import Beer from "../models/BeerModel.js";

export async function getAllBeers(req, res){ 
  try {
    const beers = await Beer.find({})
    return res.status(200).json({
      status: "success",
      data: [beers],
      message: "All beers",
  });
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
};