import { headers } from "next/headers";
import { commentData } from "./data";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const Params = req.nextUrl.searchParams;
  const query = Params.get("query");
  const comments = query
    ? commentData.filter((com) => com.comment.includes(query))
    : commentData;
  return Response.json({ comments, length: commentData.length });
}

export async function POST(req: Request) {
  const comment = await req.json();
  const newComment = {
    id: commentData.length + 1,
    comment: comment.text,
  };
  commentData.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "applicaiton/json",
    },
    status: 201,
  });
}
