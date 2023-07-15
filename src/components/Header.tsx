import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1 pl-5 text-3xl font-bold">
        {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ""}
      </div>
      <div className="flex-none">
        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <>
              <label
                tabIndex={0}
                className="btn-ghost btn-circle avatar btn"
                // onClick={() => void signOut()}
              >
                <div className="w-10 rounded-full">
                  <img
                    src={sessionData.user.image ?? ""}
                    alt={sessionData.user.name ?? ""}
                  />
                </div>
              </label>
              <ul className="dropdown-content menu rounded-box z-[1] w-52 bg-base-100 p-2 text-gray-500 shadow">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <button onClick={() => void signOut()}>Logout</button>
                </li>
              </ul>
            </>
          ) : (
            <button
              className="btn-ghost rounded-btn btn"
              onClick={() => void signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
