export default function UserCard({Name, Occupation, Email, profilepicture}) {
  return (
    <div className="w-52 mx-auto bg-purple-400 rounded-2xl shadow-md overflow-hidden p-6 text-center">
      <img
        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-indigo-500"
        src={profilepicture}
        alt="User"
      />
      <h2 className="mt-4 text-xl font-bold text-gray-800">{Name}</h2>
      <p className="text-sm text-gray-500">{Occupation}</p>
      <p className="text-sm text-indigo-600 mt-2">{Email}</p>
         
    </div>
  );
}
