export const productionMaterials = [
  {
    id: "pla",
    name: "PLA",
    family: "PLA",
  },
  {
    id: "pla-plus",
    name: "PLA+",
    family: "PLA",
  },
  {
    id: "pla-high-speed",
    name: "PLA High Speed",
    family: "PLA",
  },
  {
    id: "pla-metallic",
    name: "PLA Metallic",
    family: "PLA",
  },
  {
    id: "petg",
    name: "PETG",
    family: "PETG",
  },
  {
    id: "petg-hf",
    name: "PETG HF",
    family: "PETG",
  },
  {
    id: "petg-cf",
    name: "PETG-CF",
    family: "PETG-CF",
  },
  {
    id: "asa",
    name: "ASA",
    family: "ASA",
  },
  {
    id: "abs",
    name: "ABS",
    family: "ABS",
  },
];

function normalizeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

export function getProductionMaterial(
  materialName
) {
  const normalizedMaterial =
    normalizeText(materialName);

  return (
    productionMaterials.find(
      (material) =>
        normalizeText(material.name) ===
        normalizedMaterial
    ) || null
  );
}
