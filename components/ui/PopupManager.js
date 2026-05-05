// components/PopupManager.tsx
"use client";
import { usePopup } from "@/context/PopupProvider";
import Form from "@/components/layouts/form/Form";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";

export default function PopupManager() {
  const { popup, closePopup } = usePopup();

  if (!popup) return null;

  return (
<div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
  {popup && (
    <div className="rounded-xl overflow-hidden backdrop-blur-lg bg-white border border-white/20 shadow-xl">
      
      <div className="h-16 relative flex justify-center items-center border-b border-white/20">
        <h2 className="text-primary text-lg lg:text-2xl font-medium flex justify-center items-center gap-5">
           <Image className="inline-block" height={40} width={40} src={"/assets/images/homepage/study-abroad-form.png"} alt="get study abroad consultation for lithuania" />Get Free Study Abroad Guidance
        </h2>

        <div
          onClick={closePopup}
          className="absolute right-5 top-5 cursor-pointer text-white"
        >
          <RxCross1 className="size-5 text-gray-600" />
        </div>
      </div>

      <div className="">
        <Form />
      </div>

    </div>
  )}
</div>
  );
}