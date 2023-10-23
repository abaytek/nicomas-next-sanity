import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getHeroInfo() {
  return client.fetch(
    groq`*[_type == "banner"] {
      HeroTitle,
      "HeroImage": HeroImage.asset->url
    }`
  );
}