import { repo } from "@/lib/api/repository";
export const runtime = 'edge';
export async function GET(){return Response.json(await repo.getTestimonials());}
