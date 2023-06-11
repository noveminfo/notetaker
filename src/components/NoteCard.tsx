import type { Note } from "@prisma/client";
import { format } from "date-fns";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export const NoteCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
      <div className="card-body m-0 p-3">
        <div
          className={`collapse-arrow ${
            isExpanded ? "collapse-open" : ""
          } collapse`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="collapse-title">
            <p className="text-xl font-bold">{note.title}</p>
            <span className="text-xs text-gray-400">
              {format(note.updatedAt, "yyyy/M/d")}
            </span>
          </div>
          <div className="collapse-content">
            <article className="prose">
              <ReactMarkdown>{note.content}</ReactMarkdown>
            </article>
          </div>
        </div>
        <div className="card-actions mx-2 justify-end">
          <button onClick={onDelete} className="btn-warning btn-xs btn px-5">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
