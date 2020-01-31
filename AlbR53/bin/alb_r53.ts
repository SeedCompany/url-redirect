#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AlbR53Stack } from '../lib/alb_r53-stack';

const app = new cdk.App();
// new AlbR53Stack(app, 'AlbR53Stack');
new AlbR53Stack(app, 'redirect-2', {env: {
        account: '427932013395',
        region: process.env.CDK_DEFAULT_REGION
    }});
