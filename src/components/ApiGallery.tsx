import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import containerStyles from "../styles/container.module.css"
import typographyStyles from "../styles/typography.module.css"
import styles from "./ApiGallery.module.css"
import Footer from "./Footer"

export default function ApiGallery() {
  const router = useRouter()

  useEffect(() => {
    const name = window.location.hash.toLowerCase().slice(1)

    if (name === "controller") {
      router.push(`/docs/usecontroller/${name}`)
    } else if (
      [
        "register",
        "unregister",
        "watch",
        "handlesubmit",
        "reset",
        "setError",
        "clearerrors",
        "setvalues",
        "getvalues",
        "trigger",
        "control",
        "formstate",
      ].includes(name)
    ) {
      router.push(`/docs/useform/${name}`)
    } else if (
      ["controller", "useformcontext", "usefieldarray"].includes(name)
    ) {
      router.push(`/docs/${name}`)
    }
  }, [router])

  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        API
      </h1>
      <p className={typographyStyles.subHeading}>
        React Hook Form's 의 전반적인 API 목록들이에요.
      </p>

      <main className={styles.root}>
        <ul className={styles.gallery}>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useForm
              </h3>
              <p>
                최소한의 리랜더링을 유발하며, 강력한 커스텀 훅으로 폼을
                유효성검사해요.
              </p>
              <Link
                href="/docs/useform"
                aria-label="useForm에 대해 더 읽어보기"
              >
                Read More ▸
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useController
              </h3>
              <p>
                제어(Controlled) 컴포넌트를 위한 훅이에요. useForm의 메소드와
                연결되어 있어요. 리랜더링을 분리시켜요.
              </p>
              <Link
                href="/docs/usecontroller"
                aria-label="useController에 대해 더 읽어보기"
              >
                Read More ▸
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useFormContext
              </h3>
              <p>
                중첩된(nested) 컴포넌트에서 useForm의 메소드와 속성들을 접근할
                수 있어요. 큰 폼과 많은 곳에서 사용되는 공유 컴포넌트를 만들 때
                유용해요!
              </p>
              <Link
                href="/docs/useformcontext"
                aria-label="useFormContext에 대해 더 읽어보기"
              >
                Read More ▸
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useWatch
              </h3>
              <p>
                루트 컴포넌트의 렌더링에 영향을 주지 않으면서 개별 폼 입력
                변경을 구독(subscribe)하세요.
              </p>
              <Link href="/docs/usewatch" aria-label="usewatch에 대해 읽어보기">
                Read More ▸
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useFormState
              </h3>
              <p>
                폼의 상태를 구독(subscribe)하고, 리랜더링을 분리시켜요. 훅
                레벨에서 처리할 수 있어서 유용해요.
              </p>
              <Link
                href="/docs/useformstate"
                aria-label="useformstate에 대해서 읽어보기"
              >
                Read More ▸
              </Link>
            </div>
          </li>
          <li>
            <div>
              <h3>
                <code>{`</>`}</code>useFieldArray
              </h3>
              <p>
                동적으로 생성된 필드를 실시간으로 관리하고, 필드를 재배열하고,
                제거하고, 추가하세요. 복잡한 CRUD 데이터 입력 시나리오에
                이상적이에요.
              </p>
              <Link
                href="/docs/usefieldarray"
                aria-label="usefieldarray에 대해 읽어보기"
              >
                Read More ▸
              </Link>
            </div>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}
