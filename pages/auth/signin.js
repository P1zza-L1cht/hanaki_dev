import { getProviders, signIn } from "next-auth/react";

export default function signin({providers}) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <div className=" ">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <button onClick={()=> signIn(provider.id, {callbackUrl: "/admin/setting"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

