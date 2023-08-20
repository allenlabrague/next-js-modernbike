import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { TechSpecsDetails } from "@/constants";

const TechSpecsCard = () => {
  return (
    <Accordion
      variant="splitted"
      defaultExpandedKeys={TechSpecsDetails[0].key}
      fullWidth
      showDivider={false}
      className="flex flex-col gap-4 mt-10"
      itemClasses={{ title: "text-white" }}
    >
      {TechSpecsDetails.map((e) => (
        <AccordionItem
          key={e.key}
          aria-label={e.key}
          title={e.title}
          style={{ background: "black", color: "white" }}
        >
          {e.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-5 lg:py-10 border-t-1 border-gray-500 lg:w-[50%] ml-auto"
            >
              <p>{item.subtitle}: </p>
              <p className=" text-right w-[250px]">
                {item.subtitle === "Discounted Price" ? (
                  <s dangerouslySetInnerHTML={{ __html: item.disc }} />
                ) : (
                  item.disc
                )}
              </p>
            </div>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TechSpecsCard;
