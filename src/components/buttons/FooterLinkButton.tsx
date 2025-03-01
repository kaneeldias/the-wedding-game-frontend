import { Button } from "@mantine/core";

type Props = {
    text: string;
    link: string;
};
export default function FooterLinkButton(props: Props) {
    return (
        <a href={props.link} target={"_blank"}>
            <Button variant={"outline"} color={"black"} radius="sm" size={"sm"}>
                {props.text}
            </Button>
        </a>
    );
}
