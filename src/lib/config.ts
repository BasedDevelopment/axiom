import { AXIOM_INSTANCE, AXIOM_SECURE } from '$env/static/public';

export const INSTANCE = AXIOM_INSTANCE || 'http://10.10.9.4:3000';
export const SECURE = (AXIOM_SECURE === 'true') || false;
