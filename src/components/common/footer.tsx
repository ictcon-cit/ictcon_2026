import Link from "next/link";

export default function Footer(props: { footerItems: any[] }) {
  return (
    <div className="bg-gradient-linear md:p-10 p-5">
      <div className="flex md:flex-row flex-col justify-evenly w-full">
        {props.footerItems.map((item, index) => (
          <FooterItem key={index} title={item.title} list={item.list} />
        ))}
      </div>
    </div>
  );
}

function FooterItem(props: { title: string; list: any }) {
  return (

      <div className="text-center md:m-0 m-2">
        <h2 className="font-xs font-bold underline underline-offset-2">{props.title}</h2>
        <ul className="p-2">
          {props.list.map((item: any, index: any) => (
            <li key={index}>
              <Link href={item.url} target={item.blank ? "_blank" : "_parent"}>
                <div className="text-slate-200">{item.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

  );
}
