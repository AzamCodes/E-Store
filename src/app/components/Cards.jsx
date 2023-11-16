import { Card } from "@nextui-org/react";
import Link from "next/link";
import { formatAmount } from "../utils/stripe";
import Image from "next/image";

export default function Cards({ item, index }) {
  return (
    <Link href={`/product/${item.id}`}>
      <Card
        radius="lg"
        className="bg-[#FFF8E0] border-none w-64 sm:w-64 h-80 p-3 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
      >
        <div className="w-fit flex items-center justify-center">
          <Image
            priority={index == 0}
            alt="Woman listing to music"
            className="w-72 h-60 object-cover rounded-md"
            src={item.images[0]}
            width={288}
            height={240}
          />
        </div>
        <div className="p-2 gap-4 flex items-center justify-between ">
          <div>
            <h1 className="text-timy text-black/80">{item.name}</h1>
            <p className="text-tiny text-black/80 w-40 truncate">
              {item.description}
            </p>
          </div>

          <div className="font-bold ">
            {formatAmount(item.default_price.unit_amount)}
          </div>
        </div>
      </Card>
    </Link>
  );
}
