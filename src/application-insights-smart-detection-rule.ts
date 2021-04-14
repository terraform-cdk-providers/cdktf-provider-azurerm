// https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationInsightsSmartDetectionRuleConfig extends cdktf.TerraformMetaArguments {
  readonly additionalEmailRecipients?: string[];
  readonly applicationInsightsId: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly sendEmailsToSubscriptionOwners?: boolean;
  /** timeouts block */
  readonly timeouts?: ApplicationInsightsSmartDetectionRuleTimeouts;
}
export interface ApplicationInsightsSmartDetectionRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function applicationInsightsSmartDetectionRuleTimeoutsToTerraform(struct?: ApplicationInsightsSmartDetectionRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ApplicationInsightsSmartDetectionRule extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApplicationInsightsSmartDetectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_insights_smart_detection_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalEmailRecipients = config.additionalEmailRecipients;
    this._applicationInsightsId = config.applicationInsightsId;
    this._enabled = config.enabled;
    this._name = config.name;
    this._sendEmailsToSubscriptionOwners = config.sendEmailsToSubscriptionOwners;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_email_recipients - computed: false, optional: true, required: false
  private _additionalEmailRecipients?: string[];
  public get additionalEmailRecipients() {
    return this.getListAttribute('additional_email_recipients');
  }
  public set additionalEmailRecipients(value: string[] ) {
    this._additionalEmailRecipients = value;
  }
  public resetAdditionalEmailRecipients() {
    this._additionalEmailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEmailRecipientsInput() {
    return this._additionalEmailRecipients
  }

  // application_insights_id - computed: false, optional: false, required: true
  private _applicationInsightsId: string;
  public get applicationInsightsId() {
    return this.getStringAttribute('application_insights_id');
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsIdInput() {
    return this._applicationInsightsId
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // send_emails_to_subscription_owners - computed: false, optional: true, required: false
  private _sendEmailsToSubscriptionOwners?: boolean;
  public get sendEmailsToSubscriptionOwners() {
    return this.getBooleanAttribute('send_emails_to_subscription_owners');
  }
  public set sendEmailsToSubscriptionOwners(value: boolean ) {
    this._sendEmailsToSubscriptionOwners = value;
  }
  public resetSendEmailsToSubscriptionOwners() {
    this._sendEmailsToSubscriptionOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailsToSubscriptionOwnersInput() {
    return this._sendEmailsToSubscriptionOwners
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationInsightsSmartDetectionRuleTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ApplicationInsightsSmartDetectionRuleTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_email_recipients: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalEmailRecipients),
      application_insights_id: cdktf.stringToTerraform(this._applicationInsightsId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      send_emails_to_subscription_owners: cdktf.booleanToTerraform(this._sendEmailsToSubscriptionOwners),
      timeouts: applicationInsightsSmartDetectionRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}