import React from "react";

type Props = {
  showModal: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
};

export default function Modal({ showModal, onCloseModal, children }: Props) {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-11/12 max-w-5xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-4">
                  <h3 className="text-3xl font-semibold">New Note</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none"
                    onClick={onCloseModal}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-30 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto px-4">
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    {children}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
