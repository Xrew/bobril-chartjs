import * as b from 'bobril';

b.asset('../node_modules/chart.js/dist/Chart.bundle.js');

declare var Chart: any;

interface IData {
    type: string;
    data: any;
    options?: any;
    updateData?: (chart: any) => void;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    chart: any;
}

export const create = b.createComponent<IData>({

    init(ctx: IContext) {
        ctx.chart = null;
    },

    render(ctx: IContext, me: b.IBobrilNode) {
        me.tag = 'canvas';

        if (ctx.chart &&  ctx.data.updateData) {
            ctx.chart = ctx.data.updateData(ctx.chart);
            ctx.chart.update();
        }
    },

    postInitDom(ctx: IContext, me: b.IBobrilCacheNode){
        ctx.chart = new Chart(me.element, {
            type: ctx.data.type,
            data: ctx.data.data,
            options: ctx.data.options && ctx.data.options
        });
    }
});