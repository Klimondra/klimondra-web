import WysiwygEditor from "@/components/adminEditor/wysiwygEditor";
import LinksJsonEditor from "@/components/adminEditor/linksJsonEditor";

export const collections = [
    {
        visible_name: 'Linktree',
        name: 'linktree',
        icon: {
            lib: 'io5',
            component: 'IoLink'
        },

    },
    {
        visible_name: "Technologie",
        name: "technologie",
        icon: {
            lib: "io5",
            component: "IoCodeWorking"
        }
    },
    {
        visible_name: "Projekty",
        name: "projekty",
        icon: {
            lib: "bs",
            component: "BsDiagram2"
        },
        custom_fields: [
            {
                columnName: 'wysiwyg_description',
                component: WysiwygEditor,
            },
            {
                columnName: "links",
                component: LinksJsonEditor,
            }
        ],
        relations: [
            {
                related_collection: "technologie",
            }
        ],
    }
]