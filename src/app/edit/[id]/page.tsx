import PageHeader from "@/components/PageHeader";

export default function EditContact({ params }: any) {
  return (
    <>
      <PageHeader title="Editar contato"/>
      <div>
        <h1>{JSON.stringify(params)}</h1>
      </div>
    </>
  )
}
