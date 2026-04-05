import { repo } from "@/lib/api/repository";
export const runtime = 'edge';
export async function GET(_:Request,{params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=await repo.getArticle(slug);if(!item)return Response.json({error:"Not found"},{status:404});return Response.json(item);}
