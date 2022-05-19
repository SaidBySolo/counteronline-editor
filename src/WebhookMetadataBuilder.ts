interface content {
    name?: string
    size?: number
    process?: number
    content?: content[]
    version?: string
    srl?: string
}

export class WebhookMetadataBuilder {
    size: number;
    category: string;
    webhookData: content[];
    processData: content;

    constructor() {
        this.size = 0
        this.webhookData = []
        this.processData = {}
        this.category = ""
    }

    addMetadata(srl: string) {
        this.webhookData.push({
            process: 0,
            srl: srl
        })
    }

    clear() {
        this.size = 0
        this.webhookData = []
        this.processData = {}
        this.category = ""
    }

    reset() {
        this.size = 0
        this.category = ""
        this.processData = {}
    }

    setTitle(name: string, version: string = "") {
        if (this.processData?.name) {
            this.setCategory("")
            this.webhookData.push(this.processData)
            this.reset()
        }

        this.processData = {
            process: 1,
            name: name,
            content: []
        }

        if (version.length !== 0) {
            this.processData.version = version
        }

    }

    setCategory(category: string) {
        if (this.category.length !== 0 && this.processData?.content) {
            this.processData.content.push({ name: this.category, size: this.size })
            this.size = 0
            this.category = ""
        }
        this.category = category
    }

    setContent() {
        this.size += 1
    }

    setFinal() {
        this.setCategory("")
        this.webhookData.push(this.processData)
    }
}