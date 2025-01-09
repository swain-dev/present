import { useActionState } from "react";
import ButtonComponent from "../shared/button";

function FormStatusHook() {
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
      'Form Status' //default data value
    ]
  );

  return (
    <div className="box">
      <div className='title box_title'>Form Status Hook</div>
      <form action={submitAction}>
        <input name="userName" defaultValue={data} />
        <ButtonComponent />
        <div>{data ? data : ''}</div>
      </form>
    </div>
  );
}

export default FormStatusHook;
