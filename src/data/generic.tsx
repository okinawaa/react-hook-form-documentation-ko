import Link from "next/link"

export default {
  copy: "복사",
  codeCopied: "복사되었어요",
  required: "Required",
  learnMore: {
    title: "더 깊게 학습해볼까요?",
    description:
      "React Hook Form의 문서를 확인해보세요. API에 대한 모든 것을 배울 수 있어요.",
    buttonText: "Checkout API",
  },
  advanceUsage: {
    title: "고급 사용법",
    description: `어떻게 복잡하고 접근성 높은 폼을 설계하는지 배워봐요`,
    buttonText: `고급 사용법을 배워봐요`,
  },
  needYourSupport: {
    title: "당신들의 도움에 감사해요.",
    description: `React Hook Form이 프로젝트에 유용하다면, 깃허브에서 스타를 눌러주고 서포트를 고려해주세요.`,
    buttonText: `깃허브에서 스타누르기`,
  },
  codeExample: "Code Examples",
  menu: "Menu",
  note: "Note",
  select: "Select",
  name: "Name",
  type: "Type",
  default: "기본값",
  description: "설명",
  features: "기능들",
  delete: "삭제",
  example: "예시",
  edit: "수정",
  cancelEdit: "Cancel Edit",
  deleteAll: "Delete All",
  create: "Create",
  update: "Update",
  copied: "Copy code into your clipboard.",
  return: "Return",
  blog: "Articles/Blog",
  video: "Videos",
  newsletter: "Newsletter",
  binding: "3rd Party Bindings",
  liveDemo: "Live Demo",
  control: (
    <>
      <Link href="/docs/useform/control">
        <code>control</code>
      </Link>{" "}
      object provided by <code>useForm</code>. It's optional if you are using
      FormContext.
    </>
  ),
}
