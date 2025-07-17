import { ReactComponent as HelpIcon } from "../assets/help.svg";
import { ReactComponent as QuillPenIcon } from "../assets/quillPen.svg";

export const QuickTapList = [
  {
    title: "이렇게 질문해 보세요",
    icon: QuillPenIcon,
    items: [
      {
        text: "이번 주말에 화성에 갈 예정인데, 자연 체험 프로그램이 있을까요?",
      },
      {
        text: "사전 신청은 어디서 하나요?",
      },
    ],
  },
  {
    title: "도움이 필요하신가요?",
    icon: HelpIcon,
    items: [
      {
        text: "자연 체험 프로그램이 있을까요?",
      },
      {
        text: "사전 신청은 어디서 하나요?",
      },
    ],
  },
];
