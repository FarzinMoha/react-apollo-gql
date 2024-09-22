import PagePadding from "@/components/PagePadding";

const Home = () => {
  return (
    <main className=" min-h-[calc(100vh-90px)]">
      <PagePadding>
        <h1 className="text-[20px] my-4 font-bold">Hi there,</h1>
        <p>I wanted to split this page into ADD USER and ADD POST sections to handle mutation requests in GraphQL and by this way I could do refetch to take data again. However, the GraphQL demo backend does not support mutations. Therefore, you can only check the users and posts pages, as well as each individual post page.</p>
        <h2 className="my-4 font-bold">Additionally, you can see my handwriting and folder structures and semantic html as well.</h2>
      </PagePadding>
    </main>
  );
}

export default Home
