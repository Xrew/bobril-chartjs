import * as b from 'bobril';

interface IData {
    header: b.IBobrilChildren;
    description: b.IBobrilChildren;
    examples: b.IBobrilChildren;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        const d = ctx.data;

        me.children = [
            d.header && b.styledDiv(d.header, headerStyle),
            d.description && b.styledDiv(d.description, descriptionStyle),
            d.examples && b.styledDiv(d.examples, samplesContainerStyle)
        ];

        b.style(me, containerStyle);
    }
});

const headerStyle = b.styleDef({
    width: '100%',
    fontSize: 30,
    fontWeight: 600,
});

const descriptionStyle = b.styleDef({
    width: '100%',
    marginTop: 25,
    marginBottom: 25
});

const containerStyle = b.styleDef({
    padding: 25,
    background: 'rgba(234, 234, 234, .3)'
});

const samplesContainerStyle = b.styleDef({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch center'
});
