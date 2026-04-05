export const runtime = 'edge';
export async function POST(req:Request){const body=await req.json();return Response.json({status:"ok",message:"Contact request received",body},{status:201});}
