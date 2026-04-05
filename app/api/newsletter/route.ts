export async function POST(req:Request){const body=await req.json();return Response.json({status:"ok",message:"Newsletter signup received",body},{status:201});}
