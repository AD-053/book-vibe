import { useContext } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ListedReadList from "../../components/listedBooks/ListedReadList";
import ListedWishList from "../../components/listedBooks/ListedWishList";
import { BookContext } from "../../context/BookContext";

const Books = () => {
  const { readList, wishList } = useContext(BookContext);

  return (
    <main className="container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-success">
          Your bookshelf
        </p>

        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          Listed Books
        </h1>

        <p className="mt-2 text-base-content/70">
          Manage the books you have read and want to read.
        </p>
      </div>

      <Tabs>
        <TabList className="mb-6 flex w-full gap-2 border-b border-base-300">
          <Tab
            className="cursor-pointer rounded-t-lg px-4 py-3 text-sm font-semibold outline-none transition hover:bg-base-200 sm:px-6"
            selectedClassName="border-b-2 border-success text-success"
          >
            Read List
            <span className="ml-2 badge badge-sm badge-success">
              {readList.length}
            </span>
          </Tab>

          <Tab
            className="cursor-pointer rounded-t-lg px-4 py-3 text-sm font-semibold outline-none transition hover:bg-base-200 sm:px-6"
            selectedClassName="border-b-2 border-success text-success"
          >
            Wish List
            <span className="ml-2 badge badge-sm badge-secondary">
              {wishList.length}
            </span>
          </Tab>
        </TabList>

        <TabPanel>
          <ListedReadList />
        </TabPanel>

        <TabPanel>
          <ListedWishList />
        </TabPanel>
      </Tabs>
    </main>
  );
};

export default Books;