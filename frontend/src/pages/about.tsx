import { Chart2 } from '@/components/custom/charts2';
import { CustomChart } from '@/components/custom/customchart';
import { MyChart } from '@/components/custom/mychart';
import { Page } from '@/components/custom/page';

export const About = () => {
    return (
        <Page>
            <MyChart />
            <Chart2 />
            <CustomChart />
        </Page>
    );
};
