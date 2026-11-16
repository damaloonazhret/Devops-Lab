import { Pool } from "pg";

// export const runtime = "nodejs";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const result = await pool.query<{
      current_time: Date;
    }>("SELECT NOW() AS current_time");

    return Response.json({
      status: "ok",
      databaseTime: result.rows[0].current_time,
    });
  } catch (error) {
    console.error("Database connection failed:", error);

    return Response.json(
      { status: "error", message: "Database unavailable" },
      { status: 503 },
    );
  }
}
