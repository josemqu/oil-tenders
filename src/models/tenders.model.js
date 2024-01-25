/*
import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const tendersCollection = "tenders";
*/
/**
 * Tenders Schema Example
 *    [
    [
      "1962",
      "15\/11\/2023 15:11",
      "TOTAL AUSTRAL S.A.",
      "ACEITES CRUDOS DE PETR\u00d3LEO<br>Otros",
      "12000 M3",
      "01\/12\/2023",
      "10\/01\/2024",
      "(BRENT - DTO) \/ 0.97 * (1\/(1+ DDEE)) + IVA",
      "2709.00.10-900",
      "PTO. ROSALES (OILTANKING \/ EBYTEM)",
      "DDEE= derechos de exportaci\u00f3n vigentes. BRENT= Promedio simple de cierres de ICE Brent publicadas por Platts, entre el d\u00eda 1 y 5 posteriores a la carga, ambos inclusive. DTO= estimado 5 USD\/Bbl (a confirmar). PRECIO REVISABLE (el precio estimado es indicativo s\u00f3lo a los efectos de la presente oferta y est\u00e1n sujetos a la negociaci\u00f3n y acuerdo final entre Comprador y\r\nVendedor). Cualquier intenci\u00f3n de compra deber\u00e1 ser manifestada mediante una oferta en firme.",
      "<br\/>Cuenca: Neuquina - Neuqu\u00e9n (Medanito)",
      "<button type=\"button\" class=\"btn btn-primary btn-xs\" onclick=\"window.open('descarga_pdf_oferta.php?hgcd=aWRleHBvcnRhY2lvbj0xOTYy', 'toolbar=no,scrollbars=yes,resizable=yes');\" onclick=\"window.location.href='descarga_pdf_oferta.php?hgcd=aWRleHBvcnRhY2lvbj0oQlJFTlQgLSBEVE8pIC8gMC45NyAqICgxLygxKyBEREVFKSkgKyBJVkE'\" > Descargar PDF<\/button>",
      "No"
    ],
    [
      "1717",
      "26\/04\/2023 16:04",
      "SECRA SA ",
      "ACEITES CRUDOS DE PETR\u00d3LEO<br>Otros",
      "269 M3",
      "01\/06\/2023",
      "30\/06\/2023",
      "((ICE BRENT - 5.00 USD\/Bbl) - RET) \/ 0.97 + IVA",
      "2709.00.10-900",
      "Locaci\u00f3n Pozos SMx",
      "[(ICE Brent primera l\u00ednea. menos ( - ) 5 USD\/barril) - RET] \/ 0.97 (+) IVA. D\u00f3nde: ICE Brent primera l\u00ednea = promedio de las cotizaciones de cierre (settle) de contrato de futuros ICE Brent publicados por Platts. considerando las publicaciones correspondientes a cinco (5) d\u00edas previos o posteriores al \u00faltimo d\u00eda del mes de entrega. Informaci\u00f3n adicional: Cuenca Austral, prov.Tierra del Fuego. El petr\u00f3leo se entregar\u00e1 por cami\u00f3n desde la locaci\u00f3n de los pozos SMX. Tiene un contenido de mercurio estimado en el orden de 300 ppb y un API aprox 35\u00b0. Los t\u00e9rminos indicados en esta oferta no son vinculantes para las partes y se encuentran sujetos a la negociaci\u00f3n y acuerdo de los t\u00e9rminos finales de un eventual acuerdo de venta de petroleo crudo\r\ntipo San Sebasti\u00e1n entre las partes.",
      "<br\/>Cuenca: Austral - Tierra del Fuego - San Sebasti\u00e1n",
      "<button type=\"button\" class=\"btn btn-primary btn-xs\" onclick=\"window.open('descarga_pdf_oferta.php?hgcd=aWRleHBvcnRhY2lvbj0xNzE3', 'toolbar=no,scrollbars=yes,resizable=yes');\" onclick=\"window.location.href='descarga_pdf_oferta.php?hgcd=aWRleHBvcnRhY2lvbj0oKElDRSBCUkVOVCAtIDUuMDAgVVNEL0JibCkgLSBSRVQpIC8gMC45NyArIElWQQ'\" > Descargar PDF<\/button>",
      "Si"
    ]]

 */
/*
const tendersSchema = new mongoose.Schema({
  id: { type: String, required: true },
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
});

tendersSchema.plugin(mongoosePaginate);

export const tendersModel = mongoose.model(tendersCollection, tendersSchema);
*/
