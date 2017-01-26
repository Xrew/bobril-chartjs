import * as b from 'bobril';

const containerWidth = 500;

interface IData {
    label: string;
    content: b.IBobrilChildren;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            b.styledDiv(d.label, labelStyle),
            d.content && d.content
        ];

        b.style(me, containerStyle);
    }
});

const containerStyle = b.styleDef({
    width: containerWidth,
    marginBottom: 25
});


const labelStyle = b.styleDef({
    fontSize: 20,
    fontWeight: 600
});