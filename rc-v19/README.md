"start": "serve -s build",
"build": "react-scripts build",

## React compiler - beta.
- auto memo 
## useTransition: add isPending, non blocking component
- xử lý các func mà không gây block component.
- isPending flag để biết trạng thái hoàn thành hay chưa. sẽ tự động được cập nhật.
const [isPending, startTransition] = useTransition();

<!-- 
const handleSubmit = () => {
    startTransition(async () => {
        const error = await updateName(name);
        if (error) {
            setError(error);
            return;
        } 
        redirect("/path");
    })
};
-->

## useActionState
- quản lý trạng thái của các form.
- thay vì phải state cho từng input.
- Có thể thay thế react-hook-form.
- nên làm việc với các form đơn giản.

## useFormStatus
 <!--
 const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateName(formData.get("name"));
      if (error) {
        return error;
      }
      redirect("/path");
      return null;
    },
    null,
);
-->

- useFormStatus: Lấy thông tin, trạng thái của form ở bất kì đâu mà không cần phải dùng props.

<!-- 
    function Submit() {
        const { pending, data, method, action } = useFormStatus();
        useEffect(() => {
            if(pending) {
                console.log(data.get('username'));
                console.log(method);
                console.log(action);
            }
        }, [pending])
        return <button disabled={pending}>{!pending ? 'Submit' : 'Submitting ...'}</button>
    }
 -->
