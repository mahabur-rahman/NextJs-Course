import Link from "next/link";
import RemoveTopic from "./RemoveTopic";



const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }


    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
    {topics.map(t => (
     <div
        className="flex items-start justify-between gap-5 p-4 my-3 border border-slate-300"
        key={t._id}
        >
          <div>
            <h2 className="text-2xl font-bold">
              {t.title}
            </h2>
            <div>
              {t.description}
            </div>
          </div>
          <div className="flex gap-2">
            <RemoveTopic id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              Edit
            </Link>
          </div>
        </div>

    ))}
    </>
  )
}


