
interface CardTitleProps {
    title: string
    parraf: string
}

export const CardTitle:React.FC<CardTitleProps> = ({
    title,
    parraf
}) => {
  return (
    <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            { title }
        </h3>
        <p className="text-lg text-muted-foreground">
            { parraf }
        </p>
    </div>
  )
}
