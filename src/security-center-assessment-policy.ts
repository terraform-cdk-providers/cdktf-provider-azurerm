// https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityCenterAssessmentPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#categories SecurityCenterAssessmentPolicy#categories}
  */
  readonly categories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#description SecurityCenterAssessmentPolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#display_name SecurityCenterAssessmentPolicy#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#implementation_effort SecurityCenterAssessmentPolicy#implementation_effort}
  */
  readonly implementationEffort?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#remediation_description SecurityCenterAssessmentPolicy#remediation_description}
  */
  readonly remediationDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#severity SecurityCenterAssessmentPolicy#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#threats SecurityCenterAssessmentPolicy#threats}
  */
  readonly threats?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#user_impact SecurityCenterAssessmentPolicy#user_impact}
  */
  readonly userImpact?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#timeouts SecurityCenterAssessmentPolicy#timeouts}
  */
  readonly timeouts?: SecurityCenterAssessmentPolicyTimeouts;
}
export interface SecurityCenterAssessmentPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#create SecurityCenterAssessmentPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#delete SecurityCenterAssessmentPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#read SecurityCenterAssessmentPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html#update SecurityCenterAssessmentPolicy#update}
  */
  readonly update?: string;
}

function securityCenterAssessmentPolicyTimeoutsToTerraform(struct?: SecurityCenterAssessmentPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html azurerm_security_center_assessment_policy}
*/
export class SecurityCenterAssessmentPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/security_center_assessment_policy.html azurerm_security_center_assessment_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityCenterAssessmentPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityCenterAssessmentPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_security_center_assessment_policy',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._categories = config.categories;
    this._description = config.description;
    this._displayName = config.displayName;
    this._implementationEffort = config.implementationEffort;
    this._remediationDescription = config.remediationDescription;
    this._severity = config.severity;
    this._threats = config.threats;
    this._userImpact = config.userImpact;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: true, required: false
  private _categories?: string[];
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories
  }

  // description - computed: false, optional: false, required: true
  private _description: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // implementation_effort - computed: false, optional: true, required: false
  private _implementationEffort?: string;
  public get implementationEffort() {
    return this.getStringAttribute('implementation_effort');
  }
  public set implementationEffort(value: string ) {
    this._implementationEffort = value;
  }
  public resetImplementationEffort() {
    this._implementationEffort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationEffortInput() {
    return this._implementationEffort
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // remediation_description - computed: false, optional: true, required: false
  private _remediationDescription?: string;
  public get remediationDescription() {
    return this.getStringAttribute('remediation_description');
  }
  public set remediationDescription(value: string ) {
    this._remediationDescription = value;
  }
  public resetRemediationDescription() {
    this._remediationDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationDescriptionInput() {
    return this._remediationDescription
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string;
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string ) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity
  }

  // threats - computed: false, optional: true, required: false
  private _threats?: string[];
  public get threats() {
    return this.getListAttribute('threats');
  }
  public set threats(value: string[] ) {
    this._threats = value;
  }
  public resetThreats() {
    this._threats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatsInput() {
    return this._threats
  }

  // user_impact - computed: false, optional: true, required: false
  private _userImpact?: string;
  public get userImpact() {
    return this.getStringAttribute('user_impact');
  }
  public set userImpact(value: string ) {
    this._userImpact = value;
  }
  public resetUserImpact() {
    this._userImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userImpactInput() {
    return this._userImpact
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SecurityCenterAssessmentPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SecurityCenterAssessmentPolicyTimeouts ) {
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
      categories: cdktf.listMapper(cdktf.stringToTerraform)(this._categories),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      implementation_effort: cdktf.stringToTerraform(this._implementationEffort),
      remediation_description: cdktf.stringToTerraform(this._remediationDescription),
      severity: cdktf.stringToTerraform(this._severity),
      threats: cdktf.listMapper(cdktf.stringToTerraform)(this._threats),
      user_impact: cdktf.stringToTerraform(this._userImpact),
      timeouts: securityCenterAssessmentPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
