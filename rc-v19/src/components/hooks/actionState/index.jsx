import { useActionState } from "react";

function ActionStateHook() {
  const updateName = (value) => {
    console.log('fetch ....');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, 2000);
    });
  };

  const [data, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      console.log(previousState);
      const result = await updateName(formData.get("userName"));
      if (result) {
        return result;
      }
      return null;
    },
    [
      'swain' //default data value
    ]
  );

  return (
    <div className="box">
      <div className='title box_title'>Action State Hook</div>
      <form action={submitAction}>
        <input name="userName" defaultValue={data} />
        <button type="submit" disabled={isPending} >Add to Cart</button>
        <div>{data ? data : ''}</div>
      </form>
    </div>
  );
}

export default ActionStateHook;
