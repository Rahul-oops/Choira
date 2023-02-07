import "bootstrap/dist/css/bootstrap.min.css";
import { Button as BsButton } from "react-bootstrap";
import {
  Button,
  Checkbox,
  Progress,
  Textarea,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const CoJam1 = () => {
  return (
    <div className="relative bg-gray-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[900px] overflow-hidden text-left text-2xs text-white font-open-sans">
      <div className="absolute top-[102px] left-[94px] rounded-large bg-gray-300 w-[1252px] h-[664px]" />
      <Button
        className="absolute top-[801px] left-[844px]"
        variant="outline"
        w="138px"
        colorScheme="teal"
        rightIcon={<ArrowForwardIcon />}
      >
        End Jam
      </Button>
      <Checkbox
        className="absolute top-[141px] left-[34px]"
        colorScheme="teal"
        spacing="0.5rem"
      >
        Label
      </Checkbox>
      <div className="absolute top-[122px] left-[0px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-goldenrod w-1 h-[54px]" />
      <img
        className="absolute top-[199px] left-[34px] w-6 h-[13px]"
        alt=""
        src="../group-7.svg"
      />
      <div className="absolute top-[21px] left-[1223px] w-[123px] h-[60px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg box-border w-[123px] h-[60px] border-[1px] border-solid border-blue-grey-4" />
        <Button
          className="absolute h-[36.67%] w-[70.73%] top-[31.67%] right-[14.63%] bottom-[31.67%] left-[14.63%]"
          variant="outline"
          w="87px"
          colorScheme="teal"
          rightIcon={<ArrowForwardIcon />}
        >
          Invite
        </Button>
      </div>
      <img
        className="absolute top-[24.9px] left-[34px] w-[129.02px] h-[45.1px]"
        alt=""
        src="../group-341.svg"
      />
      <div className="absolute top-[38px] left-[614px] text-base font-semibold font-montserrat">
        Friday Night Jam
      </div>
      <div className="absolute top-[119px] left-[111px] w-[1218px] h-[630px] text-gray-100">
        <img
          className="absolute top-[0px] left-[0px] rounded-large w-[1218px] h-[630px] object-cover"
          alt=""
          src="../screen@2x.png"
        />
        <Button
          className="absolute top-[0px] left-[0px]"
          variant="outline"
          w="98px"
          colorScheme="teal"
          rightIcon={<ArrowForwardIcon />}
        >
          Button
        </Button>
        <div className="absolute top-[4px] left-[13px]">(Host)</div>
        <img
          className="absolute h-[2.06%] w-[1.4%] top-[1.11%] right-[93.51%] bottom-[96.83%] left-[5.09%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector.svg"
        />
        <div className="absolute top-[570px] left-[1136px] w-[72px] h-[50px] text-sm text-white font-montserrat">
          <div className="absolute right-[0px] bottom-[0px] rounded-base bg-gray-400 w-[72px] h-[50px]" />
          <div className="absolute right-[16px] bottom-[13px] font-semibold">
            You
          </div>
          <img
            className="absolute h-[48%] w-[33.33%] top-[26%] right-[31.94%] bottom-[26%] left-[34.72%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="../vector-94.svg"
          />
        </div>
      </div>
      <img
        className="absolute top-[801px] left-[1012px] w-[63px] h-[60px]"
        alt=""
        src="../icon.svg"
      />
      <img
        className="absolute top-[801px] left-[1105px] w-[63px] h-[60px]"
        alt=""
        src="../icon1.svg"
      />
      <img
        className="absolute top-[801px] left-[1198px] w-[63px] h-[60px]"
        alt=""
        src="../icon2.svg"
      />
      <div className="absolute top-[21px] left-[1128px] w-[63px] h-[60px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg box-border border-[1px] border-solid border-blue-grey-4" />
        <Progress
          className="absolute h-[30%] w-[15.87%] top-[58.33%] right-[47.62%] bottom-[11.67%] left-[36.51%] [transform:_rotate(-90deg)] [transform-origin:0_0]"
          w="10px"
          value={50}
          colorScheme="teal"
        />
      </div>
      <img
        className="absolute top-[801px] left-[1291px] w-[63px] h-[60px]"
        alt=""
        src="../icon3.svg"
      />
      <div className="absolute top-[801px] left-[94px] w-[390px] h-[60px] text-blue-grey-4">
        <img
          className="absolute top-[-0.5px] left-[-0.5px] w-[391px] h-[61px]"
          alt=""
          src="../group-38235.svg"
        />
        <div className="absolute top-[12px] left-[332px] w-[38px] h-[45px] text-lightskyblue">
          <div className="absolute top-[26px] left-[4px]">Cmaj</div>
          <Progress
            className="absolute top-[0px] left-[0px]"
            value={50}
            colorScheme="teal"
          />
        </div>
        <BsButton
          className="w-[86px] absolute top-[11px] left-[214px]"
          variant="primary"
        >
          Tempo
        </BsButton>
        <div className="absolute top-[11px] left-[161px] w-[30px] h-[46px]">
          <div className="absolute top-[27px] left-[0px]">Beat</div>
          <Textarea
            className="absolute top-[0px] left-[8px]"
            variant="outline"
            w="14px"
            placeholder="1"
          />
        </div>
        <div className="absolute top-[11px] left-[75px] w-[63px] h-[46px]">
          <div className="absolute top-[27px] left-[18px]">Bar</div>
          <div className="absolute top-[0px] left-[0px] w-[63px] h-5 text-base text-steelblue">
            <div className="absolute top-[0%] left-[0%] tracking-[0.1em] leading-[20px]">
              <span>000</span>
              <span className="text-white">4</span>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[60px] h-[60px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg" />
          <ChakraButton
            className="absolute h-[33.75%] w-[26.67%] top-[32.92%] right-[36.67%] bottom-[33.33%] left-[36.67%]"
            variant="solid"
            w="16px"
            colorScheme="teal"
            rightIcon={<ArrowForwardIcon />}
          >
            Button
          </ChakraButton>
        </div>
      </div>
      <img
        className="absolute top-[801px] left-[516px] w-[63px] h-[60px]"
        alt=""
        src="../icon4.svg"
      />
    </div>
  );
};

export default CoJam1;
