export class ImageFormBuilder {
    private form: FormData = new FormData();

    setCloudName(cloudName: string): ImageFormBuilder {
        this.form.append("cloud_name", cloudName);

        return this;
    }

    setUploadPreset(uploadPreset: string): ImageFormBuilder {
        this.form.append("upload_preset", uploadPreset);

        return this;
    }

    setFile(file: string): ImageFormBuilder {
        this.form.append("file", file);

        return this;
    }

    useOriginalFileName(flag: boolean): ImageFormBuilder {
        this.form.append("use_filename", flag.toString());

        return this;
    }

    create(): FormData {
        return this.form;
    }
}