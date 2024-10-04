import "./style.css";
import Navigo from "navigo";

import homePage from "./components/homePage";
import companyPage from "./components/companyPage";
import axios from "axios";

const router = new Navigo("/");

router
  .on("/", async () => {
    const url = "http://localhost:3001/v1/api/products";
    try {
      const response = await axios.get(url);
      showPage(homePage(response.data));
    } catch (error) {
      console.error(error);
    }
  })
  .on("/company", () => {
    showPage(companyPage());
  });

function showPage(htmlPage) {
  document.querySelector("#app").innerHTML = htmlPage;
}
router.resolve();
