import { repo } from "@/lib/api/repository";
export async function GET(){return Response.json(await repo.getBrands());}
