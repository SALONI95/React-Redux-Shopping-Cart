export function VarianceButton(props: { type: "plus" | "minus" }) {
  return (
    <>
      <button
        className={` border-blue-400 rounded-xl p-1 mx-3 ${
          props.type === "plus" ? "border-0 bg-blue-400" : "border-2"
        }`}
      >
        {props.type == "plus" ? "+" : "-"}
      </button>
    </>
  );
}
