"use client";

import { Loader } from "@mantine/core";
import React from "react";
import ImageUploadLabel from "@/components/inputs/ImageUpload/ImageUploadLabel";
import ImageUploadHandler from "@/components/inputs/ImageUpload/ImageUploadHandler";
import ImagePreview from "@/components/inputs/ImageUpload/ImagePreview";

type Props = {
    image: string | null;
    setImage: (url: string | null) => void;
    label: string;
    buttonText?: string;
};

export default function ImageUpload(props: Props) {
    const [loading, setLoading] = React.useState(false);

    return (
        <div className={`flex flex-col space-y-2`}>
            <ImageUploadLabel label={props.label} />

            {!loading && !props.image && <ImageUploadHandler setImage={props.setImage} setLoading={setLoading} />}

            {loading && <Loader size={"sm"} />}

            {props.image && <ImagePreview image={props.image} removeImage={() => props.setImage(null)} />}
        </div>
    );
}
