import axios from "axios";
import { useEffect, useState } from "react";
import { CgComment, CgShare } from "react-icons/cg";
import { FaEye, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PostCard() {
    const [post, setPosts] = useState([]);
    const sortViews =  post.sort((a, b) => a.views - b.views); 
    
    useEffect(() => {
        const fetchPosts = async() => {
             try{
           const response = await axios.get("https://dummyjson.com/posts");
           console.log(response.data.posts);
            setPosts(response.data.posts);
             } catch(err)  {
                console.error("error", err)
             }
        };
        fetchPosts()
    }, []);
  return (
    <div className="ml-5 w-[700px] mx-auto my-8">
      {post.map((p, idx) => (
        <Link to={`${p.id}`} key={p.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <article className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            <div className="flex items-start gap-4 p-4">
              <div className="flex-1">
                {p.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs border border-gray-200 text-gray-300 px-2 font-semibold rounded-lg">{tag}</span>
                ))}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-semibold text-gray-500">
                      {p.title}
                    </p>
                  </div>
                  <button
                    aria-label="post menu"
                    className="p-1 rounded-md hover:bg-gray-100 text-gray-600"
                    title="More"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="opacity-80"
                    >
                      <circle cx="5" cy="12" r="1.5" />
                      <circle cx="12" cy="12" r="1.5" />
                      <circle cx="19" cy="12" r="1.5" />
                    </svg>
                  </button>
                </div>

                <p className="mt-3 w-full text-sm text-gray-700 leading-relaxed">
                  {p.body}
                </p>

                <div className="mt-4 rounded-xl overflow-hidden bg-gray-50"></div>

                <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-[11px] ring-2 ring-white">
                        <FaEye />
                      </span>
                    </div>
                    {sortViews.length > 0 && <span>{p.views}</span>}
                  </div>
                  <div>
                    <span>145 comments • 32 shares</span>
                  </div>
                </div>

                <hr className="my-3 border-t border-gray-100" />

                <div className="flex items-center justify-between px-1">
                  <FaThumbsUp />
                  <CgComment />
                  <CgShare />
                </div>

                <hr className="mt-3 border-t border-gray-100" />

                <div className="mt-3 px-1 pb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <div className="bg-gray-100 rounded-xl px-3 py-2">
                        <p className="text-sm">
                          <span className="font-semibold text-gray-800">
                            Daniel
                          </span>{" "}
                          <span className="text-gray-700">
                            Absolutely stunning shot — the colors are unreal!
                          </span>
                        </p>
                      </div>
                      <div className="mt-2 text-xs text-gray-400 flex items-center gap-4">
                        <span>2h</span>
                        <button className="hover:underline">Like</button>
                        <button className="hover:underline">Reply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}