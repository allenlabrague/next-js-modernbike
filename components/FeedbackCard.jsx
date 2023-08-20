import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { User } from "@nextui-org/user";
import { FeedbackDetails } from "@/constants";
import { LuBike } from "react-icons/lu";

const FeedbackCard = () => {
  return (
    <div className="w-full">
      <Accordion
        defaultExpandedKeys={FeedbackDetails[0].key}
        fullWidth
        showDivider={false}
        className="lg:w-[50%] mx-auto"
      >
        {FeedbackDetails.map((e) => (
          <AccordionItem
            key={e.key}
            aria-label={e.name}
            indicator={<LuBike fontSize={20} color="black" />}
            title={
              <>
                <User
                  name={e.name}
                  description={e.disc}
                  avatarProps={{ src: e.image }}
                  className="bg-black text-white p-3 rounded-full"
                />
              </>
            }
          >
            {e.comment}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FeedbackCard;
